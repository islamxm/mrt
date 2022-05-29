export const cmAnswer = () => {

    const commentBtns = document.querySelectorAll('.comment-answer-btn');

    const answer = document.createElement('div');
    answer.classList.add('prod__comment_body');

    answer.innerHTML = `
        <div class="prod__comment_body_inp">
            <input type="text" placeholder="Имя">
        </div>
        <div class="prod__comment_body_inp">
            <input type="email" placeholder="Email">
            <div class="prod__comment_body_inp_ex">*Email будет скрыт </div>
        </div>
        <div class="prod__comment_body_text">
            <textarea placeholder="Комментарий..."></textarea>
        </div>
        <div class="prod__comment_body_action">
            <button class="prod__comment_body_action_btn">Отправить</button>
        </div>
    `;


                                    


    if(commentBtns.length > 0) {
        commentBtns.forEach(btn => {
            btn.addEventListener('click', (e)=> {
                btn.parentElement.parentElement.classList.remove('active');

                e.target.parentElement.parentElement.classList.toggle('active');

                if(btn.parentElement.parentElement.classList.contains('active')) {
                    btn.parentElement.parentElement.append(answer);  
                }
                if(!btn.parentElement.parentElement.classList.contains('active') && btn.parentElement.nextElementSibling) {
                    btn.parentElement.parentElement.removeChild(btn.parentElement.nextElementSibling);
                }
            })
        })  
    }
}