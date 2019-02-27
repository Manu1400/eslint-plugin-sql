/* eslint-disable no-template-curly-in-string */

export default {
  invalid: [
    {
      code: '`SELECT 1`',
      errors: [
        {
          message: 'Use "sql" tag'
        }
      ]
    },
    {
      code: '`SELECT ${\'foo\'}`',
      errors: [
        {
          message: 'Use "sql" tag'
        }
      ]
    },
    {
      code: 'foo`SELECT ${\'bar\'}`',
      errors: [
        {
          message: 'Use "sql" tag'
        }
      ]
    },
    {
      code: '`SELECT ?`',
      errors: [
        {
          message: 'Use "sql" tag'
        }
      ],
      settings: {
        sql: {
          placeholderRule: '\\?'
        }
      }
    }
  ],
  valid: [
    {
      code: '`SELECT 1`',
      options: [
        {
          allowLiteral: true
        }
      ]
    },
    {
      code: 'sql`SELECT 1`'
    },
    {
      code: 'sql`SELECT ${\'foo\'}`'
    },
    {
      code: 'sql`# comment line\nSELECT ?item ?_i WHERE { ?item wdt:P2044 ?alt. FILTER (?alt > 3000 || ?alt < -3000). } ORDER BY ?alt`'
    },
    {
      code: 'sparql`SELECT 10`'
    },
    {
      code: 'sparql`SELECT ?item WHERE { ?item p:P19/a wdno:P19 ; wdt:P31 wd:Q5 } LIMIT 100`'
    },
    {
      code: 'sparql`SELECT ?item { ?item wdt:P3814 [] }`'
    }
  ]
};
