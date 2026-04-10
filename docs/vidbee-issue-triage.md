# VidBee Issue Triage

Last updated: 2026-04-10

## Closed This Run

| Issue | Status | Evidence |
| --- | --- | --- |
| #200 | Closed | The desktop download dialog now provides a dedicated add-URL popover with manual input, validation, and fetch actions in `apps/desktop/src/renderer/src/components/download/DownloadDialog.tsx`. |
| #195 | Closed | Tray-close behavior is implemented in the Electron main process, and `closeToTray` defaults to enabled in current desktop builds. |
| #284 | Closed | Users can choose a custom destination folder per single download and playlist download in the desktop dialog. |
| #336 | Closed | Users can choose the output container directly from the current format picker, so downloads are not locked to a single container. |
| #306 | Closed | The shared Add URL flow now supports global Ctrl/Cmd + V handling through `packages/ui/src/lib/use-add-url-shortcut.ts`, and both desktop and web download dialogs register the shortcut. |

## Investigated This Run

| Issue | Status | Notes |
| --- | --- | --- |
| #263 | Open | Per-download custom folders exist, but there is no general "flatten channel subfolders" setting for regular downloads. |
| #154 | Open | Download history can open files from an action menu, but there is no double-click behavior yet. |
| #168 | Open | Packaging and Windows installer logic changed after v1.2.2, but this run did not reproduce the original installer failure. |
| #103 | Open | Packaging flow was reworked in newer releases, but this run did not verify the original duplicate-artifact report against produced builds. |
| #257 | Open | FFmpeg bootstrap logic changed after the report, but this run did not reproduce the exact `initialize()` failure path. |

## Current Priorities

1. Decide whether #263 should become a filename-template setting or a simpler "flat folder" toggle for regular downloads.
2. Add double-click open behavior for completed downloads to close #154.
3. Reproduce #168, #103, and #257 against the latest packaged desktop build before closing them.
