import React, { useEffect } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function HtmlCode(props) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

  

    return (
        <div>
            <pre>
                <ContentCopyIcon className='copyClipboard'/>
                {/* <code className={`language-${props.language}`}>{props.code}</code> */}
                <code id="myInput" className={`language-html language-javascript language-css`}>{props.code}</code>

            </pre>
        </div>
    )
}
