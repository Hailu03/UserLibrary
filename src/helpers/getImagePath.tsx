
import fileExists from 'file-exists';
export const getImagePath = (bookId: any) => {
    const jpgPath = `/bookimages/${bookId}.jpg`;
    const pngPath = `/bookimages/${bookId}.png`;

    if (fileExists.sync(jpgPath)) {
        return jpgPath;
    } else if (fileExists.sync(pngPath)) {
        return pngPath;
    } else {
        return '/bookimages/default.jpg'; // Provide a default image if none exists
    }
};