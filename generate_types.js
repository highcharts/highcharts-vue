const fs = require('fs');
const path = require('path');

function getVueVersion() {
    try {
        const vuePackageJsonPath = path.resolve(__dirname, '../../vue/package.json');
        const vuePackageJson = JSON.parse(fs.readFileSync(vuePackageJsonPath, 'utf8'));
        return vuePackageJson.version;
    }
    // if there is an error, return the 3. version by default
    // todo: think how you can handle it
    catch (e) {
        return '3.';
    }
}

function generateTypeDefinitions(vueVersion) {
    let template;

    if (vueVersion.startsWith('2.')) {
        template = fs.readFileSync(path.join(__dirname, 'types/vue2/highcharts-vue.d.ts'));
    } else {
        template = fs.readFileSync(path.join(__dirname, 'types/vue3/highcharts-vue.d.ts'));
    }

    fs.writeFileSync(path.join(__dirname, 'types/highcharts-vue.d.ts'), template);
}

const vueVersion = getVueVersion();
generateTypeDefinitions(vueVersion);