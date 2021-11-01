import { body } from 'express-validator';

export const validateUserBody = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name should be at least 3 characters'),
];
