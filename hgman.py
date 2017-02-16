#!/usr/bin/env python3

import sys
import random

__author__ = 'Alexander Popov'
__version__ = '1.0.0'
__license__ = 'MIT'

wordsDb = list()

# for count, line in enumerate(sys.stdin):
#     if not line in wordsDb:
#         wordsDb.append(line.rstrip())
with open('words.txt', 'r', encoding='utf-8') as f:
    for count, line in enumerate(f.readlines()):
        if line not in wordsDb:
            wordsDb.append(line.rstrip())


class Player:
    def __init__(self, gameWord):
        self.Health = 6
        self.Word = '-' * len(gameWord)

    def answer(self, newWords=None):
        if newWords:
            self.Word = newWords
        return(self.Word)

    def lives(self):
        return(self.Health)

    def crap(self):
        self.Health -= 1
        pass

gameWord = random.choice(wordsDb)
Gamer = Player(gameWord)

while Gamer.answer() != gameWord:
    if Gamer.lives() < 0:
        print('You are dead')
        break

    print('%d : %s' % (Gamer.lives(), Gamer.answer(),))

    offWord = input()

    wordIndex = [index for index, char in enumerate(gameWord)
                 if char == offWord]

    if len(wordIndex) != 0:
        for index in wordIndex:
            aaa = list(Gamer.answer())
            aaa[index] = offWord
            Gamer.answer("".join(aaa))
    else:
        Gamer.crap()

if not Gamer.lives() < 0:
    print('Won!')
