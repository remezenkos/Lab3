AJS.keys = {"shortcuts":[{"moduleKey":"go-to-dashboard-kb-shortcut","keys":[["g","d"]],"context":"global","op":"goTo","param":"/secure/Dashboard.jspa"},{"moduleKey":"greenhopper-gh-shortcut","keys":[["g","h"]],"context":"global","op":"execute","param":"gh.app.globalkeyboardshortcuts.goToAgile();"},{"moduleKey":"browse-project-kb-shortcut","keys":[["g","p"]],"context":"global","op":"execute","param":"var elem = document.getElementById(\"browse_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"},{"moduleKey":"greenhopper-agile-shortcut","keys":[["g","a"]],"context":"global","op":"execute","param":"gh.app.globalkeyboardshortcuts.goToAgile();"},{"moduleKey":"issue-navigator-kb-shortcut","keys":[["g","i"]],"context":"global","op":"execute","param":"var elem = document.getElementById(\"find_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"},{"moduleKey":"admin.quicksearch.dialog.shortcut","keys":[["g","g"]],"context":"global","op":"execute","param":"if (AJS.Meta.get('admin-quicksearch-show')) {\n              JIRA.Shifter.show('admin');\n            }"},{"moduleKey":"quicksearch","keys":[["/"]],"context":"global","op":"moveToAndFocus","param":"#quickSearchInput, #admin-quick-nav-field"},{"moduleKey":"jemh-adhoc-global-keypress","keys":[["g","@"]],"context":"global","op":"execute","param":"handleGlobalJemhAdHocNotificationClick();"},{"moduleKey":"create.issue","keys":[["c"]],"context":"global","op":"moveToAndClick","param":"#header .create-issue"},{"moduleKey":"shifter","keys":[["."]],"context":"global","op":"execute","param":"require(['jira/shifter'], function(Shifter) { Shifter.show(); });"},{"moduleKey":"auditLogShortcut","keys":[["g","l"]],"context":"global","op":"goTo","param":"/plugins/servlet/auditor/trail"},{"moduleKey":"help","keys":[["?"]],"context":"global","op":"click","param":"#keyshortscuthelp"},{"moduleKey":"calculate-kb-shortcut","keys":[["p","c"]],"context":"global","op":"click","param":".jpo-calculate-button"},{"moduleKey":"advanced-roadmaps-shortcut-help","keys":[["p","?"]],"context":"global","op":"click","param":"#jpo-keyboard-shortcuts"},{"moduleKey":"portfolio-teams-tab","keys":[["p","t"]],"context":"global","op":"click","param":"button.jpo-navigation-people"},{"moduleKey":"portfolio-scope-tab","keys":[["p","s"]],"context":"global","op":"click","param":"button.jpo-navigation-backlog"},{"moduleKey":"portfolio-releases-tab","keys":[["p","r"]],"context":"global","op":"click","param":"button.jpo-navigation-releases"},{"moduleKey":"portfolio-reports-tab","keys":[["p","R"]],"context":"global","op":"click","param":"button.jpo-navigation-reporting"},{"moduleKey":"portfolio-schedule-tab","keys":[["p","S"]],"context":"global","op":"click","param":"button.jpo-navigation-schedule"},{"moduleKey":"portfolio-filter","keys":[["p","f"]],"context":"global","op":"click","param":"button.jpoc-filter-search"},{"moduleKey":"portfolio-next-issue","keys":[["p","n"]],"context":"global","op":"moveToNextItem","param":".rm-table-core.clearfix"},{"moduleKey":"advanced-roadmaps-view-plans-page","keys":[["p","v"]],"context":"global","op":"goTo","param":"/secure/PortfolioPortfolioManage.jspa"}]};