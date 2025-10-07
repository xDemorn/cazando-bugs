import './style.css'

const $countdown = document.querySelector('span#countdown') as HTMLSpanElement;

if ($countdown) setInterval(startCountdown, 1000);

function startCountdown() {
    // Get current date and time
    const now = new Date();

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = now.getDay();

    // Calculate how many days to add to get to next Monday
    // If today is Monday (day 1), next Monday is 7 days away
    const daysUntilNextMonday = ((8 - dayOfWeek) % 7) || 7;

    // Create a new Date object for next Monday
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilNextMonday);
    nextMonday.setHours(0, 0, 0, 0); // set to midnight

    // Calculate the time difference (in milliseconds)
    const diffMs = nextMonday.getTime() - now.getTime();

    // Convert milliseconds to days, hours, minutes, seconds
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    $countdown.innerText = `${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

function formatNumber(x: number): number | string {
    if (x >= 10) return x;

    return `0${x}`;
}