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

export interface Podcast {
    id: number;
    title: string;
    upcoming: boolean;
    thumbnail?: string;
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

        return <Card className='card upcoming'>
            <CardContent>
                <p>'<span className='font-bold'>{podcast.title}</span>' es el próximo tema del que hablaremos el siguiente lunes.</p>
                <p>Así que suscribete al newsletter para no perderte ningun podcast!</p>
            </CardContent>
            <CardFooter className='card-footer'>
                <p className='text-primary'>{nextMonday}</p>
            </CardFooter>
        </Card>
    }

    return <Card className='card'>
        <CardHeader className="card-header">
            <img src={podcast.thumbnail} alt="Podcast thumbnail" style={{ width: '100%', height: 'auto' }} />

            <div className='card-header-overlay'>
                <Button variant='destructive'>
                    <PlayIcon />
                </Button>
            </div>
        </CardHeader>
        <CardContent className='card-footer'>
            <p>{podcast.title}</p>
            <p>Hosts: <span className='card-footer-hosts'>{podcast.hosts.join(', ')}</span></p>
        </CardContent>
    </Card>
}

export default PodcastComponent
