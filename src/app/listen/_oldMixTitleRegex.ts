// const mixTitleArr = mixTitle.split(" ");

// const withinArrayRegex = /\[[^)]*\]/;
// const mixSeriesTitle: RegExpMatchArray | null =
// 	mixTitle.match(withinArrayRegex);

/*
        \[ : match an opening array bracket
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \] : match closing array bracket

    */

// const mixTitleRegex = /\-\s([^)]*)\s\(/;
// let mixTitleAlone: RegExpMatchArray | null = mixTitle.match(mixTitleRegex);
// if (mixTitleAlone) mixTitleAlone[1] = mixTitleAlone[1].trim();

/*
        \- : match a dash
        \s : match a whitespace
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \s : match a whitespace
        \( : match opening parentheses

    */

// const withinParensRegex = /\([^)]*\)/;
// const mixTypeTitle: RegExpMatchArray | null = mixTitle.match(withinParensRegex);
/*
        \( : match an opening parentheses
        ( : begin capturing group
        [^)]+: match one or more non ) characters
        ) : end capturing group
        \) : match closing parentheses

    */

export {};
