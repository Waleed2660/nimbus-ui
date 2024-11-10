// Utility functions for path manipulation

// Convert display path to actual S3 path
export const toS3Path = (displayPath) => {
    if (displayPath.startsWith('Home/')) {
        return `Nimbus/Main/${displayPath.substring(5)}`;
    }
    if (displayPath.startsWith('Bin/')) {
        return `Nimbus/Bin/${displayPath.substring(4)}`;
    }
    return displayPath;
}

    // Convert S3 path to display path
export const toDisplayPath = (s3Path) => {
    if (s3Path.startsWith('Nimbus/Main')) {
        return `Home/${s3Path.substring(12)}`;
    }
    if (s3Path.startsWith('Nimbus/Bin')) {
        return `Bin/${s3Path.substring(11)}`;
    }
    return s3Path;
}

    // Check if path is in bin
    // isBinPath: (path) => path.includes('Nimbus/Bin/') || path.startsWith('Bin/'),

    // Check if path is in bin
    // isHomePath: (path) => path.includes('Nimbus/Main/') || path.startsWith('Home/'),