import { winner } from './winner';

export const autoGrader = (grade: number) => {
    switch (true) {
        case grade > 100:
            return 'Invalid grade';
        case grade === 100:
            winner(grade);
            break;
        case grade >= 90:
            return 'A';
        case grade >= 80:
            return 'B';
        case grade >= 70:
            return 'C';
        case grade >= 60:
            return 'D';
        case grade < 0:
            return 'Invalid grade';
        default:
            return 'F';
    };
};
