import { TSESLint } from '@typescript-eslint/experimental-utils';
import { rule, RULE_NAME } from './empty_space_before_class';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [`const example = true;`],
  invalid: [],
});
