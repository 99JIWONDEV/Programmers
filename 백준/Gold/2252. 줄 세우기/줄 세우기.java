import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // 문제 수(N)와 의존 관계 수(M) 입력
        int N = sc.nextInt();
        int M = sc.nextInt();
        
        // 그래프를 위한 인접 리스트 초기화
        List<List<Integer>> graph = new ArrayList<>(N + 1);
        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>()); // 각 정점에 대해 빈 리스트 추가
        }

        // 진입 차수 배열 초기화
        int[] inDegree = new int[N + 1];

        // 의존 관계 입력 처리
        for (int i = 0; i < M; i++) {
            int a = sc.nextInt(); // 선행 문제
            int b = sc.nextInt(); // 후행 문제
            graph.get(a).add(b); // 그래프에 간선 추가
            inDegree[b]++; // 후행 문제의 진입 차수 증가
        }

        // 위상 정렬을 위한 최소 힙(우선순위 큐) 초기화
        //Queue<Integer> pq = new LinkedList<>();
        //3번 조건때문에 pq로 해야 함
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // 진입 차수가 0인 문제들을 큐에 추가
        for (int i = 1; i <= N; i++) {
            if (inDegree[i] == 0) {
                pq.offer(i);
            }
        }

        // 위상 정렬 결과를 저장할 리스트
        List<Integer> result = new ArrayList<>();

        // 큐가 비어있지 않을 때까지 반복
        while (!pq.isEmpty()) {
            int current = pq.poll(); // 큐에서 문제 하나 꺼내기
            result.add(current); // 현재 문제를 결과 리스트에 추가
            
            // 현재 문제에 의존하는 문제들에 대해
            for (int neighbor : graph.get(current)) {
                inDegree[neighbor]--; // 진입 차수 감소
                if (inDegree[neighbor] == 0) { // 진입 차수가 0이 되면
                    pq.offer(neighbor); // 큐에 추가
                }
            }
        }

        // 결과 출력
        for (int problem : result) {
            System.out.print(problem + " "); // 문제 번호 출력
        }

        sc.close(); // 스캐너 닫기
    }
}
