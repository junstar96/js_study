class Node {
    constructor(name) {
        this.name = name; // 노드 이름
        this.edges = []; // 연결된 노드와 가중치를 저장
    }

    addEdge(targetNode, weight) {
        this.edges.push({ node: targetNode, weight }); // 가중치와 대상 노드를 저장
    }
}

class Graph {
    constructor() {
        this.nodes = new Map(); // 노드 저장소
    }

    addNode(name) {
        if (!this.nodes.has(name)) {
            this.nodes.set(name, new Node(name));
        }
    }

    getNode(name)
    {
        const check = this.nodes.get('A');
        if(!check)
        {
            return "nothing";
        }
        else
        {
            return check.edges;
        }
    }

    

    addEdge(source, target, weight) {
        if (this.nodes.has(source) && this.nodes.has(target)) {
            this.nodes.get(source).addEdge(this.nodes.get(target), weight);
        } else {
            console.error("노드가 존재하지 않습니다.");
        }
    }

    dijkstra(start, target) {
        const distances = new Map(); // 각 노드의 최단 거리
        const previous = new Map(); // 경로 추적을 위한 이전 노드
        const unvisited = new Set(this.nodes.keys()); // 방문하지 않은 노드

        // 초기화
        for (const node of this.nodes.keys()) {
            distances.set(node, Infinity); // 모든 거리를 무한대로 초기화
            previous.set(node, null); // 이전 노드 초기화
        }
        distances.set(start, 0); // 시작 노드 거리는 0

        while (unvisited.size > 0) {
            // 방문하지 않은 노드 중 최단 거리를 가진 노드를 선택
            const current = [...unvisited].reduce((minNode, node) => {
                return distances.get(node) < distances.get(minNode) ? node : minNode;
            });

            // 종료 조건: 타겟 노드에 도달한 경우
            if (current === target) break;

            // 현재 노드를 방문 처리
            unvisited.delete(current);

            // 이웃 노드 업데이트
            const currentNode = this.nodes.get(current);
            for (const edge of currentNode.edges) {
                const neighbor = edge.node.name;
                if (!unvisited.has(neighbor)) continue; // 이미 방문한 노드는 스킵

                const newDistance = distances.get(current) + edge.weight;
                if (newDistance < distances.get(neighbor)) {
                    distances.set(neighbor, newDistance);
                    previous.set(neighbor, current);
                }
            }
        }

        // 경로 및 거리 반환
        const path = [];
        let step = target;
        while (step) {
            path.unshift(step);
            step = previous.get(step);
        }

        return { distance: distances.get(target), path };
    }
}

// 사용 예시
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 2);
graph.addEdge("A", "D", 5);
graph.addEdge("B", "C", 3);
graph.addEdge("B", "E", 6);
graph.addEdge("C", "D", 1);
graph.addEdge("C", "E", 2);

const result = graph.dijkstra("A", "D");
console.log(`최단 거리: ${result.distance}`);
console.log(`경로: ${result.path.join(" → ")}`);
console.log(graph.getNode('A'));
