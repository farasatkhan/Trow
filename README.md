# Trow - use Twitter from command prompt
Automate simple daily stuff by using Trow. So you can use Twitter without logging into your account every single time.

Introduction:
--------------
Trow is based on twitter api which pull data from twitter in the form of JSON format and allow you to use twitter from command prompt. It also allow you to automate simple daily stuff.<br />

Installation:
------------------
> npm install trow
- Open the Path
- Run npm start to see the available options to use.

Usage:
------------------
- Login to your Twitter account<br />
- Go to this [URL](https://apps.twitter.com/) or Search Twitter apps Managment<br />
- Click on Create New App<br />
- Fill the boxes<br />
- Go to Application Setting and Grab your Consumer Key and Consumer Secret. <br />
- Scroll down the Page and Click on Create Access Token. It will generate access token then simple Grab your Access Token and Access token secret.<br />
- Open config.js and enter the keys:
  
  ```
  module.exports = {
    consumer_key:         '...',
    consumer_secret:      '...',
      access_token:         '...',
    access_token_secret:  '...',
      timeout_ms:           60*1000,
  }
  ```


Example:
------------------
>npm start

```
    Hi there, These are the option which you can use.

   -v 	 	   Upload Video
   -i 		   Upload Image
   -m 		   Reply to the recent 10 users
   -p 	 	   Tweet
    A  -m 	   Send message to user who follow you 
    A  -r 	   Send quote to users according to the feeling
```

#### -p:

  Do you want to post? (Y/N) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```Y``` <br />
  Write your post to tweet? &nbsp;&nbsp;&nbsp;&nbsp;  ```Hello Twitter from #nodejs``` <br />
  Tweeted Successfully

#### -v:

  Write the name of file, Please include the format. &nbsp;&nbsp;&nbsp;&nbsp;   ```myVideo.mp4``` <br />
  It might take some time. So Be Patient <br />
  Video Uploaded successfully

#### -i:

  What is the name of the file you want to upload? e.g, img.jpg &nbsp;&nbsp;&nbsp; ``` nodejs.png ``` <br />

  Write your tweet about the image &nbsp;&nbsp;&nbsp;&nbsp;	```“Hello Twitter from #nodejs”``` <br />
  Tweeted successfully

#### -m:

Write your message to sent? &nbsp;&nbsp;&nbsp;&nbsp; ``` Hey Guys! Wanna Catch Up!``` <br />
Write the number is users to sent in the inbox? Max 50:  &nbsp;&nbsp;&nbsp;&nbsp; 	```20``` <br />

The Default number is 20 and the maximum number is 50.

#### A  -m:

This function runs without any instruction by the user. Whenever someone follow you this function will send him a ‘Thank you’ message. 

#### A  -r:

This function will retweet to the user who express their impression by tweeting. <br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```“The weather looks good today #today #sunday #happy”```<br />

This function will sent a quote to the user. By Default it contain 15 quotes in each but you can add or remove quotes by emotion folder.

Authors:
------------------
  Farasatkhan farasatkahan@gmail.com, Pakistan

License:
------------------

	
```
MIT License

	Copyright (c) 2017 Farasat Khan
	

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

```
