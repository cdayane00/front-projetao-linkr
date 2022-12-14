import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        background-color: var(--bg);
        /* font-family: 'Lato', sans-serif;
        font-family: 'Oswald', sans-serif;
        font-family: 'Passion One', cursive; */
    }
    
    button {
        cursor: pointer;
    }

    h1, h2 {
        font-family: 'Passion One', cursive;
        font-weight: 700;
        color: var(--text-primary);
    }

    h3 {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        color: var(--text-primary);
    }

    p{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }

    strong {
        font-weight: 600;
    }
    

    :root {
        --bg: #333333;
        --bg-secondary: #151515;
        --bg-timeline-posts: #171717;
        --bg-comments: #1e1e1e;
        --bg-re-post-panel: #1e1e1e;
        --bg-white: #FFFFFF;
        --bg-publish-input: #EFEFEF;
        --bg-button: #1877F2;
        --bg-search-bar: #E7E7E7;
        --bg-comments-forms: #252525;
        
        --text-primary: #FFFFFF;
        --text-on-white: #151515;
        --text-placeholder: #9F9F9F;
        --text-publish: #707070;
        --text-blue: #1877F2;
        --text-tooltip: #505050;
        --text-search-bar: #515151;
        --text-edit: #4c4c4c;
        --text-post: #B7B7B7;
        --text-comment-author: #f3f3f3;
        --text-comment-details: #565656;
        --text-comment: #ACACAC;
        --text-comments-input: #575757;
        --link-primary: #CECECE;
        --link-secondary: #9B9595;
        --link-hover: #c6c6c6;

        --border: #4D4D4D;
        --stroke-comment: #353535;
        --outline-blue: #50A0F7;

        --heart: #AC0000;
        --search-bar: #C6C6C6;
        --send-comment: #f3f3f3;

        --width-body: 100%
    }
`;
