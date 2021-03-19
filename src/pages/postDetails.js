import React from 'react';
import { useParams } from "react-router-dom";

export default function PostDetails() {
    let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}
