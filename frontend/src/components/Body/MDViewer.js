import React from 'react';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';

const MDViewer = ({ url }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const asyncProcess = async () => {
      axios
        .get(url)
        .then((response) => {
          setContents(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    asyncProcess();
  });

  return (
    <div className="mysubject-box">
      <MDEditor.Markdown source={contents} />
    </div>
  );
};

export default MDViewer;
