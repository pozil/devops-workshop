module.exports = {
    preset: '@lwc/jest-preset',
    moduleNameMapper: {
        '^example/(.+)$': '<rootDir>/src/modules/example/$1/$1'
    },
    globals: {
        'lwc-jest': {
            nativeShadow: true
        }
    }
};
