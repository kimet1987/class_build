import { useRouter } from "next/router";

export default function BoardsPage(params) {
    const router = useRouter();
    return (
        <>
            <div>안녕하세요 게시판 동적 페이지입니다</div>
            <div>게시글 아이디 : {router.query.boardId}</div>;
        </>
    );
}

// export const getServerSideProps = () => {
//     // 만약 서바사이드 렌더링을 하는 페이지라면? ==> out 폴더로 생성 불가
//     // 이런 경우는 nest.config.js 에서 exportPathMap으로 현재 페이지 제외 시키기
// };
