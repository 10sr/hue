// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import huePubSub from 'utils/huePubSub';
import sessionManager from 'apps/notebook2/execution/sessionManager';
import { koSetup } from 'spec/jasmineSetup';
import { NAME, SESSION_PANEL_SHOW_EVENT } from '../ko.sessionPanel';

describe('ko.sessionPanel.js', () => {
  const setup = koSetup();

  it('should render component', async () => {
    const element = await setup.renderComponent(NAME, {});

    expect(element.querySelector('[data-test="' + NAME + '"]')).toBeTruthy();
  });

  it('should be visible on publish event', async () => {
    const wrapper = await setup.renderComponent(NAME, {});
    const sessionPanelElement = wrapper.querySelector('[data-test="' + NAME + '"]');
    spyOn(sessionManager, 'getAllSessions').and.returnValue(Promise.resolve([]));

    // Initially hidden
    expect(sessionPanelElement.style['display']).toEqual('none');

    huePubSub.publish(SESSION_PANEL_SHOW_EVENT, 'impala');
    await setup.waitForKoUpdate();

    // Visible after pubsub
    expect(sessionPanelElement.style['display']).toBeFalsy();
  });
});
