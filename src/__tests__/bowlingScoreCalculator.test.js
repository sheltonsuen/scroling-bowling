import {calculateTotalScore} from '../bowlingScoreCalculator';

test('given 1st round X with following 2 balls no balls down, rest no balls down when calculate total score then return 10 scores', () => {
    const scoreBoard = [{
        label: 'X',
        firstBallDown: 10
    }, {
        label: '',
        firstBallDown: 0,
        secondBallDown: 0
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(10)
});

test('given 1st round X with following 1st ball no balls down and 2nd ball 1 ball down, rest no balls down when calculate total score then return 12 scores', () => {
    const scoreBoard = [{
        label: 'X',
        firstBallDown: 10
    }, {
        label: '',
        firstBallDown: 0,
        secondBallDown: 1,
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(12)
});


test('given 1st round X with following 1st ball 2 ball down and 2nd ball no ball down, rest no balls down when calculate total score then return 14 scores', () => {
    const scoreBoard = [{
        label: 'X',
        firstBallDown: 10
    }, {
        label: '',
        firstBallDown: 2,
        secondBallDown: 0,
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(14)
});
