export const calculateTotalScore = (scoreBoard) => {
    if (scoreBoard[0].label === 'X') {

        return scoreBoard[0].firstBallDown + (scoreBoard[1].firstBallDown + scoreBoard[1].secondBallDown) * 2
    }
};
