#!/usr/bin/env node

import { task, question, correctAnswer } from '../src/games/even-game.js';
import game from '../src/index.js';

game(task, question, correctAnswer);
