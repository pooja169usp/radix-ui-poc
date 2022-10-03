import { styled } from "@stitches/react";
import {
    gray,
    blue
  } from '@radix-ui/colors';
  import '../index.scss';

export const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
  
    variants: {
        size: {
            small: {
            fontSize: 12,
            padding: '0 10px',
            lineHeight: '25px',
            height: 25,
            },
        },
        variant: {
            blue: {
                backgroundColor: blue.blue11,
                color: "white",
                '&:hover': { backgroundColor: blue.blue10 },
                '&.focus-visible': { backgroundColor: blue.blue10 },
                '&:active': { backgroundColor: blue.blue9 },
                '&[disabled]': { 
                    backgroundColor: gray.gray4 
                },
            },
        },
        ghost: {
            true: {
                backgroundColor: 'transparent',
            }
        },
        outline: {
            true: {
                backgroundColor: 'transparent',
                border: '1px solid',
                borderColor: blue.blue11,
            }
        },
        link: {
            true: {
                backgroundColor: 'transparent',
                color: blue.blue11,
                padding: 0,
                '&:hover': { backgroundColor: 'transparent', color: blue.blue10 },
                '&.focus-visible': { backgroundColor: 'transparent' },
                '&:active': { backgroundColor: 'transparent', color: blue.blue12 },
                '&[disabled]': {
                    backgroundColor: 'transparent',
                    color: gray.gray4,
                },
            },
        },
        compoundVariants: [
            {
                variant: 'blue',
                outline: 'true',
                css: {
                    color: blue.blue11,
                    '&:hover': { backgroundColor: blue.blue11, color: 'white' },
                    '&.focus-visible': { backgroundColor: blue.blue11, color: 'white' },
                    '&:active': { backgroundColor: blue.blue9, color: 'white' },
                    '&[disabled]': {
                        backgroundColor: 'transparent',
                        borderColor: gray.gray4,
                        color: gray.gray4,
                    },
                },
            }
        ],
    },
  
    defaultVariants: {
      variant: 'blue',
    },
  });