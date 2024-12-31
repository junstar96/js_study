function calculateFee(time, fees) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    if (time <= baseTime) {
        return baseFee;
    }
    const extraTime = time - baseTime;
    return baseFee + Math.ceil(extraTime / unitTime) * unitFee;
}

function solution(fees, records) {
    const parkingTimes = {}; // 차량별 누적 주차 시간
    const inTimes = {};      // 차량별 입차 시간 기록

    // 시간을 분으로 변환하는 함수
    function timeToMinutes(time) {
        const [hh, mm] = time.split(":").map(Number);
        return hh * 60 + mm;
    }

    // 입출차 기록 처리
    records.forEach(record => {
        const [time, carNumber, action] = record.split(" ");
        const minutes = timeToMinutes(time);

        if (action === "IN") {
            inTimes[carNumber] = minutes;
        } else if (action === "OUT") {
            const parkedTime = minutes - inTimes[carNumber];
            parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkedTime;
            delete inTimes[carNumber];
        }
    });

    // 출차 기록 없는 차량 처리
    const endOfDay = 23 * 60 + 59;
    for (const [carNumber, inTime] of Object.entries(inTimes)) {
        const parkedTime = endOfDay - inTime;
        parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkedTime;
    }

    // 차량 번호 정렬 후 요금 계산
    const sortedCarNumbers = Object.keys(parkingTimes).sort();
    return sortedCarNumbers.map(carNumber => {
        return calculateFee(parkingTimes[carNumber], fees);
    });
}

//해당 문제처럼 더 간략화 시킬 수 있는 방법을 잘 기억해두도록 하자.