#!/usr/bin/env python3

__author__ = 'Alexander Popov'
__version__ = '0.1.0'
__license__ = 'MIT'

usQwertyKeyboard = 'abcdefghijklmnopqrstuvwxyz'.upper()

def genKeys(alphabet):
        keys = list()

        for letter in alphabet:
            keys.append('<button onclick="offChar(\'%s\')">%s</button>' % (letter, letter)) # FIX IT

        return(keys)

if __name__ == '__main__':
    with open('keys.html', 'w+', encoding='utf-8') as f:
        keyboard = genKeys(usQwertyKeyboard)

        for item in keyboard:
            f.write(item)
