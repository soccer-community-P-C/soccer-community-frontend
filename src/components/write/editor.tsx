'use client';

import { IconLoader2 } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <IconLoader2 aria-label="로딩중" className="mx-auto animate-spin" role="status" />,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

export default function Editor(props: ReactQuillProps) {
  return <ReactQuill formats={formats} modules={modules} theme="snow" {...props} />;
}
