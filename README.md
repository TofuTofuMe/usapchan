## Usapchan

### A chat and forum software focused on a college setting.

#### Instructions

Clone the repo\
`git clone git@github.com:TofuTofuMe/usapchan.git`

##### Server

1. Change to the server folder\
   `cd usapchan/server`
2. Install the packages\
   `npm install`
3. Configure\
   `config.json`
4. Start the server\
   `npm start`

##### Client

1. Change to the client folder\
   `cd usapchan/client`
2. Install the packages\
   `npm install`
3. Set the server address as the `API_URL`\
   in `.env.dev` or `.env.prod`
4. Build the client\
   `cd ./android`\
   `ENVFILE=.env.prod ./gradlew assembleRelease`\
   or run it directly\
   `ENVFILE=.env.dev npm start`
