export const initialState = {
  sendMessage: '',
  sendStatus: 0
};

export const contactReducer = (state, action) => {
  switch(action.type){
    case 'sending':
      return {sendMessage: '問い合わせ送信中です。', sendStatus: 1};
      break;
    case 'done':
      return {sendMessage: '問い合わせ送信完了しました。', sendStatus: 2};
      break;
    case 'finish':
      return {...state, sendStatus: 0};
      break;
    default:
      return {...state};
      break;
  }
}
