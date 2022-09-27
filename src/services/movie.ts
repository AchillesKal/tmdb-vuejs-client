export const getMovieReleaseYearFromString = (date: string): string => {
    const d = new Date(date);

    return d.getFullYear().toString();
}

export const getHoursFromRuntime = (runtime: number): string => {
    const hours =  Math.floor(runtime / 60);
    const minutes = runtime % 60;

    let result = "";

    if (hours > 0) {
        result = `${hours}h`;
    }

    if (hours > 0 && minutes > 0) {
        result += " ";
    }

    if (minutes > 0) {
        result += `${minutes}m`;
    }

    return result;
}
