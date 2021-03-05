import { createProfiler } from './factory';
import { getAllFactors } from './index';

import { jest } from '@jest/globals'

const mockProfiler = jest.fn(createProfiler)
const mockGetAllFactors = jest.fn(getAllFactors)
test('Factory Profiler test', () => {
    expect(createProfiler("label")).toEqual(mockProfiler("label"));
  });
test('getAllFactors function test', () => {
    expect(getAllFactors(223456789)).toEqual(mockGetAllFactors(223456789));
})