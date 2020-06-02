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
    const nextRound = scoreBoard[index + 1];
    if (!nextRound) {
        return 0;
    }

    switch (currentRound.label) {
        case 'X': {
            if (nextRound.label === 'X') {
                return 10 + scoreBoard[index + 2] ? scoreBoard[index + 2].firstBallDown || 0 : 0;
            }

            return calculateCurrentRoundScore(nextRound);
        }
        case '/': {
            return nextRound.firstBallDown;
        }
        default: {
            return 0;
        }
    }
};
