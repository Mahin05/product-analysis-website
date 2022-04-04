import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Q&A</h2>
            <div>
                <h2>Question-1: <br /> What is Context API?</h2>
                <p>Answer: <br /> Context API হল react এর একটি structure. এটি prop-drilling এ ভূমিকা রাখে। Context API, Globar variable তৈরিতে সাহায্য করে। React Context API , consumer ও provider return করে। Context API তে data, props এর মাধ্যমে top-down এ পাঠানো হয়। </p>
            </div>
            <div>
                <h2>Question-2: <br /> What is Semantic tag?</h2>
                <p>Answer: <br /> Sematic tag, text এর category define করে। এটি browser ও search engine এর জন্য কাজকে সহজ করে। Semantic tag একটি element এর purpose কে describe করে। Semantic tag, browser এবং developer কে এর meaning clearly describe করে। Semantic tag একটি web page এর বিভিন্ন অংশকে describe করে।</p>
            </div>
        </div>
    );
};

export default Blogs;