// 최소 힙(MinHeap) 클래스를 정의하여 다익스트라 알고리즘에서 가장 짧은 거리를 가진 노드를 빠르게 선택
class MinHeap {
    constructor() {
      this.heap = []; // 힙을 저장할 배열을 초기화
    }
  
    // 새로운 요소 [거리, 노드]를 힙에 추가
    push([dist, to]) {
      this.heap.push([dist, to]); // 새로운 요소를 배열 끝에 추가
      // 거리 기준으로 오름차순 정렬하여 최소 힙 역할을 수행
      // 원래는, 버블업(Bubble Up)으로 해야되지만 여기선 일단 러프하게 정렬로 함
      this.heap.sort((a, b) => a[0] - b[0]);
    }
  
    // 힙에서 가장 작은 요소(최소 거리를 가진 노드) 제거 및 반환
    pop() {
      return this.heap.shift(); // 배열의 첫 번째 요소를 제거하고 반환 (최소 거리)
    }
  
    // 힙이 비었는지 확인하는 메소드
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  // 그래프 정의: 각 노드의 연결된 노드와 거리 정보가 포함된 인접 리스트 형태
  const graph = [
    [], // 사용하지 않음 (0번 노드)
    [
      { to: 2, dist: 1 },
      { to: 4, dist: 2 },
    ], // 1번 노드와 연결된 노드들
    [
      { to: 1, dist: 1 },
      { to: 3, dist: 3 },
      { to: 5, dist: 2 },
    ], // 2번 노드와 연결된 노드들
    [
      { to: 2, dist: 3 },
      { to: 5, dist: 1 },
    ], // 3번 노드와 연결된 노드들
    [
      { to: 1, dist: 2 },
      { to: 5, dist: 2 },
    ], // 4번 노드와 연결된 노드들
    [
      { to: 2, dist: 2 },
      { to: 3, dist: 1 },
      { to: 4, dist: 2 },
    ], // 5번 노드와 연결된 노드들
  ];
  
  // 시작 노드에서 각 노드까지의 최단 거리를 저장하는 배열, 모든 거리를 무한대로 초기화
  const dist = Array(graph.length).fill(Infinity);
  const visited = new Array(graph.length).fill(false); // 방문자 체크 배열 추가
  
  // 최소 힙 생성 및 시작 노드(1번) 추가, 시작 노드까지의 거리를 0으로 설정
  const minHeap = new MinHeap();
  minHeap.push([0, 1]); // 시작 노드와 거리 0 추가
  dist[1] = 0; // 시작 노드의 거리를 0으로 설정하여 초기화
  
  // 최소 힙이 비어 있을 때까지 반복하여 최단 경로를 탐색
  while (!minHeap.isEmpty()) {
    // 현재 힙에서 가장 작은 거리를 가진 노드를 꺼냄
    const [currentDist, to] = minHeap.pop();
  
    // 이미 방문한 노드는 스킵
    if (visited[to]) {
      continue;
    }
    visited[to] = true; // 방문 처리
  
    // 현재 노드와 연결된 모든 이웃 노드 탐색
    graph[to].forEach((next) => {
      // 이미 방문한 노드는 처리하지 않음
      if (visited[next.to]) {
        return;
      }
  
      const newDist = dist[to] + next.dist; // 현재 거리 + 다음 노드로의 거리 계산
  
      // 새로 계산한 경로가 기존에 저장된 경로보다 짧으면 갱신
      if (dist[next.to] > newDist) {
        dist[next.to] = newDist; // 더 짧은 거리로 갱신
        minHeap.push([newDist, next.to]); // 갱신된 거리를 최소 힙에 추가
      }
    });
  }
  
  // 최종 결과: 시작 노드에서 각 노드까지의 최단 경로를 배열로 출력
  console.log(dist); // [Infinity, 0, 1, 4, 2, 3]
  