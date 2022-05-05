# Press page github users
<img width="400" alt="image" src="https://user-images.githubusercontent.com/24418879/166885411-d72450a7-33e2-4fc8-8345-a5f16dba1973.png">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/24418879/166885478-a716772b-7f25-49ae-83f1-204ca263b53c.png">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/24418879/166885599-6f6faa3e-ec05-4ead-846c-6d2846093598.png">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/24418879/166885866-37a6f567-a28d-46de-8e99-1749bfa735ac.png">


## Get it Running

1. install Dependencies: run `npm i`
2. to run **Press page github users**: run `npm start`
3. e2e tests: run `npm run test:e2e`
4. to build the project: run `npm run build`
5. to eject configs: run `npm run eject`

## Tech stack

- axios
- react
- matherial-ui
- redux
- redux-saga
- styled-components
- typescript
- cypress
- eslint

## Main Features

- Added themes changing
- Used intl library for support of different locales
- Added lazy images loading
- Added toast notifications for indication of any issues/errors
- Added loading indication component
- Added responsive design

## Future features

- Add unit tests for future features
  At the moment the application does not contain much logic that needs to be tested with unit tests. Due to the limited time to complete the task, more attention was paid to writing e2e tests. However, unit tests will need to be added in the future as the application logic becomes more complex.

## Trobleshooting

if you face witth some issues with runnins cypress e2e tests (on Window OS), please try to follow the next steps

- reinstall the `cypress` using npm (run `npm uninstall cypress` and then `npm i cypress`)
- delete all of Cypress folders: "roaming, app data, modules etc." everything and reinstall the Cypress
