import streamlit as st

st.title("Кахатонщики chat bot")

if "messages" not in st.session_state:
    st.session_state.messages = [{"role": "ai", "content": "С чем вам помочь?"}]


for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

if user_prompt := st.chat_input():

    st.chat_message("user").write(user_prompt)
    st.session_state.messages.append({"role": "user", "content": user_prompt})

    with st.spinner("В процессе..."):

        response = f"Я получил ваш запрос: '{user_prompt}'. Это тестовый ответ без API."

        st.chat_message("ai").write(response)
        st.session_state.messages.append({"role": "ai", "content": response})