export const initialState = {
  sendMessage: '',
  sendStatus: 0
};

export const contactReducer = (state, action) => {
  switch(action.type){
    case 'sending':
      return {sendMessage: '問い合わせ送信中です。', sendStatus: 1}
    case 'done':
      return {sendMessage: '問い合わせ送信完了しました。', sendStatus: 2}
    case 'finish':
      return {...state, sendStatus: 0}
    default:
      return {throw new Error();}
  }
}
