import {calculateTotalScore} from '../bowlingScoreCalculator';

test('given 1st round X with following 2 balls no balls down, rest no balls down when calculate total score then return 10 scores', () => {
    const scoreBoard = [{
        label: 'X',
        firstBallDown: 10
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(10)
});
