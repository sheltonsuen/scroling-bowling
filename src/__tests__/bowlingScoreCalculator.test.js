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

test('given 1st round X with following 1st ball 1 balls down and 2nd ball 2 balls down, rest no balls down when calculate total score then return 16 scores', () => {
    const scoreBoard = [{
        label: 'X',
        firstBallDown: 10
    }, {
        label: '',
        firstBallDown: 1,
        secondBallDown: 2,
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(16)
});

test('given 1st round / with following 1st ball no ball down, current 1st ball and rest no balls down when calculate total score then return 10 scores', () => {
    const scoreBoard = [{
        label: '/',
        firstBallDown: 0,
        secondBallDown: 10
    }, {
        label: '',
        firstBallDown: 0,
        secondBallDown: 0,
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(10)
});

test('given 1st round / with following 1st ball 2 balls down, current 1st ball and rest no balls down when calculate total score then return 14 scores', () => {
    const scoreBoard = [{
        label: '/',
        firstBallDown: 0,
        secondBallDown: 10
    }, {
        label: '',
        firstBallDown: 2,
        secondBallDown: 0,
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(14)
});

test('given 1st round 1st ball no ball down and 2nd ball no ball down, and rest no balls down when calculate total score then return 0 score', () => {
    const scoreBoard = [{
        label: '',
        firstBallDown: 0,
        secondBallDown: 0
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(0)
});

test('given 1st round 1st ball 1 ball down and 2nd ball no ball down, and rest no balls down when calculate total score then return 1 scores', () => {
    const scoreBoard = [{
        label: '',
        firstBallDown: 1,
        secondBallDown: 0
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(1)
});

test('given 1st round 1st ball 1 ball down and 2nd ball 2 ball down, and rest no balls down when calculate total score then return 3 scores', () => {
    const scoreBoard = [{
        label: '',
        firstBallDown: 1,
        secondBallDown: 2
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(3)
});

test('given 10th round X with following 2 balls no balls down, and previous no balls down when calculate total score then return 10 scores', () => {
    const scoreBoard = [, , , , , , , , , {
        label: 'X',
        firstBallDown: 10,
        secondBallDown: 0,
        thirdBallDown: 0
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(10)
});

test('given 10th round X with following 1st ball no balls down and 2nd ball 1 ball down, and previous no balls down when calculate total score then return 11 scores', () => {
    const scoreBoard = [, , , , , , , , , {
        label: 'X',
        firstBallDown: 10,
        secondBallDown: 0,
        thirdBallDown: 1
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(11)
});

test('given 10th round X with following 1st ball 2 ball down and 2nd ball no ball down, and previous no balls down when calculate total score then return 12 scores', () => {
    const scoreBoard = [, , , , , , , , , {
        label: 'X',
        firstBallDown: 10,
        secondBallDown: 2,
        thirdBallDown: 0
    }];

    const totalScore = calculateTotalScore(scoreBoard);

    expect(totalScore).toBe(12)
});
