export const classnames = (...argv: any[]) => {
    const names: Array<string> = [];
    
    for (const argument of argv) {
        if (typeof argument === 'string') names.push(argument);
        else if (typeof argument === 'object') {
            for (const key in argument as Object) {
                if (!Object.hasOwn(argument, key)) continue;
                
                const element = argument[key];
                
                if (Boolean(element)) names.push(key)
            }
        } else continue;
    }

    return names.join(' ');
}