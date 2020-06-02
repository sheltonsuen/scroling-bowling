export const calculateTotalScore = (scoreBoard) => {
    switch (scoreBoard[0].label) {
        case 'X':{
            return scoreBoard[0].firstBallDown + (scoreBoard[1].firstBallDown + scoreBoard[1].secondBallDown) * 2
        }
        case '/': {
            return scoreBoard[0].firstBallDown + scoreBoard[0].secondBallDown + scoreBoard[1].firstBallDown
        }
    }
};
