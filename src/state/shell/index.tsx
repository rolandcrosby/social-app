import React from 'react'

import {Provider as ColorModeProvider} from './color-mode'
import {Provider as ComposerProvider} from './composer'
import {Provider as MinimalModeProvider} from './minimal-mode'
import {Provider as OnboardingProvider} from './onboarding'
import {Provider as ShellLayoutProvder} from './shell-layout'
import {Provider as TickEveryMinuteProvider} from './tick-every-minute'

export {useSetThemePrefs, useThemePrefs} from './color-mode'
export {useComposerControls, useComposerState} from './composer'
export {useMinimalShellMode, useSetMinimalShellMode} from './minimal-mode'
export {useOnboardingDispatch, useOnboardingState} from './onboarding'
export {useTickEveryMinute} from './tick-every-minute'

export function Provider({children}: React.PropsWithChildren<{}>) {
  return (
    <ShellLayoutProvder>
      <MinimalModeProvider>
        <ColorModeProvider>
          <OnboardingProvider>
            <ComposerProvider>
              <TickEveryMinuteProvider>{children}</TickEveryMinuteProvider>
            </ComposerProvider>
          </OnboardingProvider>
        </ColorModeProvider>
      </MinimalModeProvider>
    </ShellLayoutProvder>
  )
}
