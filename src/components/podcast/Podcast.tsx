import './Podcast.css'
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../ui/card"
import { PlayIcon } from 'lucide-react';
import { getTimeToNextMonday } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { classnames } from '@/utils';

export interface Podcast {
    id: number;
    title: string;
    desc: string;
    upcoming: boolean;
    thumbnail: string;
    audio?: string;
    hosts: Array<string>;
}

interface IPodcastProps {
    podcast: Podcast;
}

const PodcastComponent = ({ podcast }: IPodcastProps) => {
    const [nextMonday, setNextMonday] = useState<string>(getTimeToNextMonday());

    if (podcast.upcoming) {
        useMemo(() => {
            setInterval(() => {
                setNextMonday(_ => getTimeToNextMonday());
            }, 1000);
        }, []);
    }

    return <Card className={classnames('card', { upcoming: podcast.upcoming })}>
        <CardHeader className="card-header">
            <img src={podcast.thumbnail} alt="Podcast thumbnail" style={{ width: '100%', height: 'auto' }} />

            <div className='card-header-overlay'>
                {podcast.upcoming ? <div className="card-header-overlay">
                    <p className='text-primary countdown'>{nextMonday}</p>
                </div> : <Button variant='destructive'>
                    <PlayIcon />
                </Button>}
            </div>
        </CardHeader>
        <CardContent className='card-footer'>
            <p className='title'>{podcast.title}</p>
            <p className='desc'>{podcast.desc}</p>
            <p className='hosts-title'>Hosts:</p>
            <div className='card-footer-hosts'>
                {podcast.hosts.map(host => <span>{host}</span>)}
            </div>
        </CardContent>
    </Card>
}

export default PodcastComponent
