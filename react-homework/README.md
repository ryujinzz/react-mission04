# 야무쌤과 함께하는 리액트 과제4

초기설정

## 1.깃 
원래는 레파지토리 먼저 생성하고 깃 클론 해서 하던 방식말고 
<br/>이번에는 직접 폴더부터 생성하고 깃에 레파지토리를 생성한 뒤 같이 연결해서 쓰려고 했지만 도중에 문제가 생겼다. 

1. 바탕화면에 폴더를 생성하고 
2. git init을 진행 
3. 내 깃허브에 가서 폴더이름과 똑같은 레파지토리 생성 (리드미도 같이 생성한다는 것에 체크함)
4. 터미널에서 git remote add origin <복사한 깃허브 주소> 로 등록 
5. 문제 발생 : 나중에 큰 2번까지 다 끝내고 환경설정 커밋을 남긴 뒤 push를 하려고 했지만 되지 않음. <br/>```git push origin main```
- 문제 추측: 미리 만들어둔 리드미와 vite가 생성한 리드미의 충돌로 push 되지 않아서 그런 것 같음
-문제 해결 : 리드미파일을 지우고 강제로 push함. <br/>```git push origin main --force```

## 2.vite & react (eslint, prettier)

상원님이 제공해 주신 초기설정 순서 요약대로 잘 따라함 
![setting_sangwon](https://github.com/ryujinzz/react-mission04/assets/146301783/1bf6a3cc-a759-4542-9d8d-71da73b8d48d)



## 3. 초기 문서 설정
1. 깃 이그노어에 .env 넣고 .env 파일 밖에 생성함
2. vite 가 만들어준 필요없는 css 파일 삭제함, 필요없는 사진파일도 삭제함.
3. 나중에 나뉘어질 컴포넌트를 위해서 components 폴더를 생성함.
<img width="203" alt="스크린샷 2024-02-08 오후 2 45 01" src="https://github.com/ryujinzz/react-mission04/assets/146301783/e42e5308-e64f-4624-8113-1cbef464c5fa">


## 4. tailwind 설정 
정현님이 제공해주신 방법대로 따라함 
<br/>이번에는 테일윈드 꼭 써보고 싶어서 여러사람한테 물어봄 
<br/>https://peppered-sing-5f4.notion.site/79d0e13f3c9f44a48802968d02214d88
<br/>위의 테일윈드 설정을 참고하고, tailwind.css를 jsx 파일에 연결 시킨다.
