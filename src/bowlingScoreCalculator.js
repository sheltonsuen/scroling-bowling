export const calculateTotalScore = (scoreBoard) =>
    scoreBoard
        .map((record, index) => {
            if (!record) {
                return 0;
            }

            const currentScore = calculateCurrentRoundScore(record);
            const currentBonus = calculateCurrentRoundBonus(record, index, scoreBoard);

            return currentScore + currentBonus;
        })
        .reduce((acc, prev) => acc + prev, 0);

const calculateCurrentRoundScore = (currentRound) => {
    switch (currentRound.label) {
        case 'X': {
            return 10;
        }
        case '/': {
            return currentRound.firstBallDown + 10;
        }
        default: {
            return currentRound.firstBallDown + currentRound.secondBallDown;
        }
    }
};

const calculateCurrentRoundBonus = (currentRound, index, scoreBoard) => {
    switch (currentRound.label) {
        case 'X': {
            return findNextFirstBallDown(index, scoreBoard) + findNextSecondBallDown(index, scoreBoard);
        }
        case '/': {
            return findNextFirstBallDown(index, scoreBoard);
        }
        default: {
            return 0;
        }
    }
};

const findNextFirstBallDown = (index, scoreBoard) => {
    if (index === 9) {
        const currentRound = scoreBoard[index];
        return currentRound.label === 'X' ? currentRound.secondBallDown : currentRound.thirdBallDown;
    }

    const nextRound = scoreBoard[index + 1];
    return nextRound ? nextRound.firstBallDown : 0;
};

const findNextSecondBallDown = (index, scoreBoard) => {
    if (index === 9) {
        return scoreBoard[index].thirdBallDown;
    }

    const nextRound = scoreBoard[index + 1];
    if (!nextRound) {
        return 0;
    }

    if (nextRound.label === 'X' && index === 8) {
        return scoreBoard[index + 1].secondBallDown;
    }

    if (nextRound.label === 'X') {
        const thirdRound = scoreBoard[index + 2];
        return nextRound.firstBallDown + thirdRound.firstBallDown;
    }

    return nextRound ? nextRound.secondBallDown : 0;
};
