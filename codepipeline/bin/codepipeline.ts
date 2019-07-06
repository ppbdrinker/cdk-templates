#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { CodepipelineStack } from '../lib/codepipeline-stack';

const app = new cdk.App();
new CodepipelineStack(app, 'CodepipelineStack');
