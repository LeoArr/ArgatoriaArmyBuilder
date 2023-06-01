# Argatoria Army Builder

Argatoria Army Builder is a light weight, fan-made army builder for the awesome miniature wargame Argatoria. Argatoria is created by [Spellcrow](https://www.spellcrow.com/).

### Features

- Build and manage your Argatoria armies.
- Automatic rules to make sure your army is valid.
- Printable cards with unit rules.

### Hosting

At this time I'm keeping this project hosted on my private Firebase project. You can find it here:
https://townwars-377ea.web.app/

## Setup

Clone the repo and run:

```
npm install
```

To start the server locally:

```
make start
```

And run this command to build the app:

```
make build
```

## Upcoming

Currently I'm working on:

- Printable cards includes army rules, artefacts, spells etc.
- A more condensed text-only printable army list.
- Proper routing and state handling. (React router & Redux?)
- Styling...

## Collaborate

Feel free to collaborate, reach out to me with any questions.

Currently it needs:

- More armies, artefacts, flags etc. Manual data entry into `src/assets/armies.js`.
- Cool graphics. For example a favicon and portraits for the unit cards.
- Proofreading. Are all the stats correct? Are the rules correct? etc.
