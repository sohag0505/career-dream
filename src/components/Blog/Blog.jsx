import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h2>Question and Answer</h2>
      </div>
      <div>
        <h3>When would you use Context API ?</h3>
        <p>
          When I need to pass component to grandfather component to child
          component or when we need pass data thought the child lot of step(pops
          drilling) .That"s time we need to use Context API to reduce code and
          code complex.
        </p>
      </div>
      <div>
        <h3>What is custom custom hook ?</h3>
        <p>
          Custom React JS hooks are reusable functions that a React JS software
          developer can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature, one
          can install a third-party library and solve the problem.We can also
          create react custom hook by combining 1 or more hooks
        </p>
      </div>
      <div>
        <h3>Why we use useRef() ?</h3>
        <p>
          The useRef() Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly
        </p>
      </div>
      <div>
        <h3>Why we use useMemo() ?</h3>
        <p>
          Fundamentally, useMemo built to help us optimize re-renders. it this
          in two ways: Reducing the amount of work that needs to be done in a
          given render. Reducing the number of times that a component needs to
          re-render.
        </p>
      </div>
    </div>
  );
};

export default Blog;
