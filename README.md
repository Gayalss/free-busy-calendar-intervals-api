# Free-Busy Calendar Intervals API

# Getting Started

Follow these instructions to set up and run the project on your local machine.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## API Reference

#### Get Busy Calenar Intervals

```http
  POST /api/v1/calendar/busyIntervals
```

| Parameter    | Type     | Description   |
| :----------- | :------- | :------------ |
| `calenderId` | `string` | **Required**. |
| `startTime`  | `string` | **Required**. |
| `endTime`    | `string` | **Required**. |

Takes **calenderId**, **startTime**, **endTime** and returns the busy intervals.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

## License

[MIT](https://choosealicense.com/licenses/mit/)
