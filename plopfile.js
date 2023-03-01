const {
  viewExists,
  hooksExists,
  factoryExists,
  getNavigators,
  navigatorExists,
  componentExists,
  interfaceExists,
  reduxExists,
  navigatorExistsForViews,
} = require('./src/utils/componentExists');

module.exports = plop => {
  plop.setGenerator('Page', {
    description: 'Create a new Function Page',
    prompts:
      getNavigators().length > 0
        ? [
            {
              type: 'list',
              name: 'navigator',
              message: 'Belongs to which example?',
              default: getNavigators()[0],
              choices: () => getNavigators(),
            },
            {
              type: 'input',
              name: 'name',
              message: 'What should it be called?',
              default: 'Home Page',
              validate: (value, otherValues) => {
                if (/.+/.test(value)) {
                  if (otherValues.navigator != 'Default') {
                    return navigatorExistsForViews(
                      value,
                      'components',
                      otherValues.navigator
                    )
                      ? 'A component or container with this name already exists'
                      : true;
                  } else {
                    return viewExists(value)
                      ? 'A component or container with this name already exists'
                      : true;
                  }
                }
                return 'The name is required';
              },
            },
          ]
        : [
            {
              type: 'input',
              name: 'name',
              message: 'What should it be called?',
              default: 'Home Page',
              validate: value => {
                if (/.+/.test(value)) {
                  return viewExists(value)
                    ? 'A component or container with this name already exists'
                    : true;
                }
                return 'The name is required';
              },
            },
          ],
    actions: data => {
      let notNavigator = data.navigator == null || data.navigator == 'Default';

      let path = notNavigator
        ? 'src/pages/{{pascalCase name}}/Layout/index.tsx'
        : 'src/pages/{{pascalCase navigator}}/{{pascalCase name}}/Layout/index.tsx';

      let pathStyles = notNavigator
        ? 'src/pages/{{pascalCase name}}/Layout/styles.ts'
        : 'src/pages/{{pascalCase navigator}}/{{pascalCase name}}/Layout/styles.ts';

      let componentTemplate = notNavigator
        ? './__templates__/view/view_layout_index.js.hbs'
        : './__templates__/view/view_layout_index_to_navigator.js.hbs';

      let pathToIndex = notNavigator
        ? 'src/pages/{{pascalCase name}}/index.tsx'
        : 'src/pages/{{pascalCase navigator}}/{{pascalCase name}}/index.tsx';

      let pathToIndexData = notNavigator
        ? 'src/pages/{{pascalCase name}}/data.ts'
        : 'src/pages/{{pascalCase navigator}}/{{pascalCase name}}/data.ts';

      let pathToIndexTest = notNavigator
        ? 'src/pages/{{pascalCase name}}/{{pascalCase name}}.spec.tsx'
        : 'src/pages/{{pascalCase navigator}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx';

      let componentTemplateIndex =
        './__templates__/function/functionIndex.js.hbs';

      let componentTemplateStyles = './__templates__/view/styles.js.hbs';
      let pathIndex = 'src/pages/index.ts';
      let patternImport = /\/\/ Import views here\n/g;
      let patternInsert = /\/\/ Insert views here\n/g;
      let componentTemplateImport = './__templates__/common/importView.hbs';

      const actions =
        data.navigator == null || data.navigator == 'Default'
          ? [
              {
                type: 'add',
                path: path,
                templateFile: componentTemplate,
              },
              {
                type: 'add',
                path: pathStyles,
                templateFile: componentTemplateStyles,
              },
              {
                type: 'add',
                path: pathToIndex,
                templateFile: './__templates__/view/view_index.js.hbs',
              },
              {
                type: 'add',
                path: pathToIndexData,
                templateFile: './__templates__/view/data.js.hbs',
              },
              {
                type: 'add',
                path: pathToIndexTest,
                templateFile: './__templates__/view/component_test.js.hbs',
              },
              {
                type: 'modify',
                path: pathIndex,
                pattern: patternImport,
                templateFile: './__templates__/view/import_view.js.hbs',
              },
            ]
          : [
              {
                type: 'add',
                path: path,
                templateFile: componentTemplate,
              },
              {
                type: 'add',
                path: pathStyles,
                templateFile: componentTemplateStyles,
              },
              {
                type: 'add',
                path: pathToIndex,
                templateFile: './__templates__/view/view_index.js.hbs',
              },
              {
                type: 'add',
                path: pathToIndexData,
                templateFile: './__templates__/view/data.js.hbs',
              },
              {
                type: 'add',
                path: pathToIndexTest,
                templateFile: './__templates__/view/component_test.js.hbs',
              },
              {
                type: 'modify',
                path: 'src/pages/{{pascalCase navigator}}/navigator.tsx',
                pattern: /\/\/ import views here\n/g,
                templateFile: './__templates__/flow/import_view_routes.js.hbs',
              },
              {
                type: 'modify',
                path: 'src/pages/{{pascalCase navigator}}/navigator.tsx',
                pattern: /\/\/ add viewsName here\n/g,
                templateFile: './__templates__/flow/import_view_name.js.hbs',
              },
            ];
      return actions;
    },
  });
  plop.setGenerator('Component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: data => {
      let patternImport = /\/\/ Import component here\n/g;

      const actions = [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/Layout/index.tsx',
          templateFile:
            './__templates__/components/component_layout_index.js.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/Layout/styles.ts',
          templateFile: './__templates__/components/styles.js.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.tsx',
          templateFile: './__templates__/components/component_index.js.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/data.ts',
          templateFile: './__templates__/components/data.js.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
          templateFile: './__templates__/components/component_test.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/components/index.ts',
          pattern: patternImport,
          templateFile: './__templates__/components/import_component.js.hbs',
        },
      ];

      return actions;
    },
  });
  plop.setGenerator('Redux', {
    description: 'Create a new redux',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Person',
        validate: value => {
          if (/.+/.test(value)) {
            return reduxExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/redux/reducers/{{pascalCase name}}.ts',
          templateFile: './__templates__/redux/new_redux.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.ts',
          pattern: /\/\/ Import redux here\n/g,
          templateFile: './__templates__/redux/import_export_redux.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.ts',
          pattern: /\/\/ use redux here\n/g,
          templateFile: './__templates__/redux/use_redux.js.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('Flow', {
    description: 'Create a new Flow navigation',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of navigation?',
        default: 'StackNavigation',
        choices: () => ['StackNavigation'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Settings',
        validate: value => {
          if (/.+/.test(value)) {
            return navigatorExists(value)
              ? 'A navigator with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/index.tsx',
          templateFile: './__templates__/flow/index_flow.jbs.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/{{pascalCase name}}/Layout/index.tsx',
          templateFile:
            './__templates__/flow/flow_navigator_layout_index.js.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/{{pascalCase name}}/Layout/styles.ts',
          templateFile: './__templates__/flow/styles.js.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/{{pascalCase name}}/index.tsx',
          templateFile: './__templates__/flow/flow_navigator_index.js.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/{{pascalCase name}}/data.ts',
          templateFile: './__templates__/flow/data.js.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
          templateFile: './__templates__/flow/component_test.js.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}Navigator/navigator.tsx',
          templateFile: './__templates__/flow/navigator.js.hbs',
        },
        {
          type: 'modify',
          path: 'src/pages/index.ts',
          pattern: /\/\/ Import views here\n/g,
          templateFile: './__templates__/flow/import_view.js.hbs',
        },
      ];

      return actions;
    },
  });
  plop.setGenerator('Hook', {
    description: 'Create a new Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'useHookName',
        validate: value => {
          if (/.+/.test(value)) {
            return factoryExists(value)
              ? 'A factory with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/utils/hooks/use{{pascalCase name}}.tsx',
          templateFile: './__templates__/utils/factory.tsx.hbs',
        },
        {
          type: 'modify',
          path: 'src/utils/hooks/index.ts',
          pattern: /\/\/ export factory\n/g,
          templateFile: './__templates__/utils/export_factoy.ts.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('Interfaces', {
    description: 'Create a new interface',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'PaymentInterface',
        validate: value => {
          if (/.+/.test(value)) {
            return interfaceExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }
          return 'The name is required';
        },
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/utils/interfaces/{{pascalCase name}}Interfaces.tsx',
          templateFile: './__templates__/utils/interfacesContext.tsx.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('Request', {
    description: 'Create a new request',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'GetPaymentInfo',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/data/dataInterfaces/I{{pascalCase name}}.ts',
          templateFile: './__templates__/data/dataInterface.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/data/dataInterfaces/index.ts',
          pattern: /\/\/ Export dataInterfaces here\n/g,
          templateFile: './__templates__/data/export_dataInterfaces.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/data/useCases/{{pascalCase name}}.ts',
          templateFile: './__templates__/data/useCases.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/data/useCases/index.ts',
          pattern: /\/\/ Export useCases here\n/g,
          templateFile: './__templates__/data/export_useCases.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/data/models/I{{pascalCase name}}Request.ts',
          templateFile: './__templates__/data/model.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/data/models/index.ts',
          pattern: /\/\/ Export models here\n/g,
          templateFile: './__templates__/data/export_model.ts.hbs',
        },
      ];
      return actions;
    },
  });
};
